# Apache HTTPD

## Clickjacking attack

> Clickjacking is a well-known web application vulnerabilities.

1. Ensure mod_headers.so is enabled in your `httpd.conf`.
2. Go to `$web_server/conf` directory:
3. Add this in `httpd.conf`:

   ```
   Header always append X-Frame-Options SAMEORIGIN
   ```

4. Restart Apache service.

## Disable directory browser listing

> Disable directory listing in a browser, so the visitor doesn’t see what all file and folders you have under root or subdirectory.

1. Go to `$web_server/conf` directory.
2. Search for `Directory` and change to this in `httpd.conf`:

   ```
   <Directory /path/to/folder>
   	Options -Indexes
   </Directory>
   ```

   or

   ```
   <Directory /path/to/folder>
   	Options None
   </Directory>
   ```

3. Restart Apache service.

## Disable HTTP 1.0 protocol

> HTTP 1.0 has security weakness related to session hijacking. We can disable this by using the `mod_rewrite` module.

- Ensure to load `mod_rewrite` module in `httpd.conf` file
- Enable `RewriteEngine` directive as following and add Rewrite condition to allow only HTTP 1.1

```
RewriteEngine On
RewriteCond %{THE_REQUEST} !HTTP/1.1$
RewriteRule .* - [F]
```

## Disable trace HTTP request

> By default `Trace` method is enabled in Apache web server.

1. Go to `$web_server/conf` directory:
2. Add this in `httpd.conf`:

   ```
   TraceEnable off
   ```

3. Restart Apache service.

## Etag

> It allows remote attackers to obtain sensitive information like inode number, multipart MIME boundary, and child process through Etag header.

1. Go to `$web_server/conf` directory:
2. Add this in `httpd.conf`:

   ```
   FileETag None
   ```

3. Restart Apache service.

## HTTP request methods

> HTTP 1.1 protocol support many request methods which may not be required and some of them are having potential risk. Default configuration support `OPTIONS`, `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `TRACE`, `CONNECT` method in HTTP 1.1 protocol.

1. Go to `$web_server/conf` directory:
2. Search for `Directory` and add this in `httpd.conf`:

   ```
   <LimitExcept GET POST HEAD>
   	deny from all
   </LimitExcept>
   ```

3. Restart Apache service.

## Protect binary and configuration directory permission

> By default, permission for binary and configuration is 755 that means any user on a server can view the configuration. You can disallow another user to get into `conf` and `bin` folder.

1. Go to `$web_server` directory.
2. Change permission of `bin` and `conf` folder:

   ```bash
   chmod –R 750 bin conf
   ```

3. Restart Apache service.

## Remove version banner

> Exposing version means you are helping hacker to speedy the reconnaissance process.

1. Go to `$web_server/conf` directory.
2. Add this in `httpd.conf`:

   ```
   ServerTokens Prod
   ServerSignature Off
   ```

3. Restart Apache service.

## Run Apache from a non-privileged account

> A default installation runs as nobody or daemon. Using a separate non-privileged user for Apache is good.

1.  Create a user and group called `apache`:

    ```bash
    groupadd apache
    useradd –G apache apache
    ```

2.  Change apache installation directory ownership to a newly created non-privileged user:

    ```bash
    chown –R apache:apache /opt/apache
    ```

3.  Go to `$web_server/conf` directory.
4.  Modify User & Group Directive in `httpd.conf`:

    ```
    User apache
    Group apache
    ```

5.  Restart Apache service.
6.  To verify:

    ```bash
    ps –ef | grep http
    ```

## Server side include

> SSI attack allows the exploitation of a web application by injecting scripts in HTML pages or executing codes remotely.

1. Go to `$web_server/conf` directory.
2. Search for `Directory` and add `Includes in Options` directive in `httpd.conf`:

   ```
   <Directory /path/to/folder>
   	Options –Indexes -Includes
   	Order allow,denyAllow from all
   </Directory>
   ```

3. Restart Apache service.

## Set cookie with HttpOnly and Secure flag

> You can mitigate most of the common Cross Site Scripting attack using `HttpOnly` and `Secure` flag in a cookie. Without having `HttpOnly` and `Secure`, it is possible to steal or manipulate web application session and cookies, and it’s dangerous.

1. Ensure `mod_headers.so` is enabled in `httpd.conf`.
2. Go to `$web_server/conf` directory:
3. Add this in `httpd.conf`:

   ```
   Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
   ```

4. Restart Apache service.

## System settings protection

> In a default installation, users can override apache configuration using `.htaccess`. If you want to stop users from changing your apache server settings, you can add `AllowOverride` to `None` as shown below.

1. Go to `$web_server/conf` directory:
2. Modify `Directory` in `httpd.conf`:

   ```
   <Directory />
   	Options -Indexes
   	AllowOverride None
   </Directory>
   ```

3. Restart Apache service.

## Timeout value configuration

> By default, Apache time-out value is 300 seconds, which can be a victim of Slow Loris attack and DoS.

1. Go to `$web_server/conf` directory.
2. Add this in `httpd.conf`:

   ```
   Timeout 60
   ```

3. Restart Apache service.

## XSS protection

> Cross Site Scripting (XSS) protection can be bypassed in many browsers. You could apply this protection for a web application if it was disabled by the user.

1. Go to `$web_server/conf` directory.
2. Add this in `httpd.conf`:

   ```
   Header set X-XSS-Protection "1; mode=block"
   ```

3. Restart Apache service.