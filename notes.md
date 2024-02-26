# functions in madison > .zshrc

connect2buddy() {
ssh -i ~/Downloads/madskey.pem ubuntu@buddysystem.click
}

my-deploy(){
./deployFiles.sh -k ~/Downloads/madskey.pem -h buddysystem.click -s $1
}

## Markup script

# headings

1 - 6 # before the heading text for the heading. the number of # is the level

# styling text

**This is Bold text**
**This is bold text**

_This text is Italicized_

~~This was mistaken text~~

**bold and _nested_ italic**

**_All Bold and Italic_**

This is a <sub>subscript</sub> text

This is a <sup>superscript</sup> text

<!-- Quoting text -->

Quote text is indented with a different type of color. you can quote text with a >

ex

> this is a Quote

<!-- Quoting Code -->

use git status to list all new or modified files that havent yet been committed

use backtics `#RRGGBB`

<!-- Links-->

[Link Name](link)

<!-- Images-->

! [image description](link)

<!-- Lists-->

unordered list

- item 1

* item 2

- item 3

ordered list

1. item 1
1. item 2
1. item 3

Nested list

1. first

- next
  - next

## Dev Essentials

- Intro
  - Well rounded engineers
    - Capable
    - creative
    - collaborative
    - curious
- Git
  - Allows you to track versions of files in a directory
  - Handling merging conflicts
    - open test.md in an editor
  - forks
    - allows you to crete a copy
- History of web programming
  - 3 phases in history
    1. formation of the internet that supports the comm of web apps
    1. the creation of HTML and HTTP making it possible to share hyperlinked docs
    1. Creation of CSS and JavaScript to enable interactive web apps
- Technology Stack
  - Tech Stack = collection of technologies you use to create or deliver your web app.
    - top of the stack is the web framework
      - then backend services zB caching, database, logging, monnitoring
- **AWS**

## HTTP

- HTTP = Hypertext Transfer Protocol
  - HTTP is a protocol used for transferring hypertext requests and information on the World Wide Web. It's the foundation of data communication on the internet.
- _Client-Server model_
  - The client sends an HTTP request to the server, which then responds with the requested resource (such as a webpage or a file).
- HTTP is stateless, meaning that each request from a client to a server is independent and unrelated to any previous requests. The server doesn't retain information about past requests.
- HTTP operates through a request-response cycle. A client (usually a web browser) sends an HTTP request to a server specifying the desired action, such as retrieving a webpage. The server then processes the request and sends back an HTTP response containing the requested resource, along with an appropriate status code.
- HTTP can be augmented with security protocols like HTTPS (HTTP Secure), which encrypts data exchanged between the client and server, providing a secure channel for communication.

# Caddy

Is a web service that listens for incoming HTTP requests. Then serves up the requested static files or routes to another web service - is called a gateway or reverse proxy

- basically a really smart sign maker. helps your site get notices on the internet by making it easy for people to find and access it.
- easy setup : you tell it what the site is called and where it is located
- automatic : does a lot of the work automatically so the website is fast, safe and reliable
- security : is a security guard for the site
- fast delivery: helps the website deliver its content fast
- flexible: Adapts to different situations so useful lots
- **Important Caddy Files**
  - Configuration file : ~/Caddyfile
    - contains definitions for routing HTTP requests recieved
    - to determine location where static HTML files are loaded from.
  - HTML files: ~/public_html
    - directory of files caddy serves up when requests are made

## HTTPS, TLS and Web Certificates

## Console Commands

## DNS

## HTML

## CSS

## JavaScript
