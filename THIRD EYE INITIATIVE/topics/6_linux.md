# Linux

## Commands

1. **gzip**
   * <pre><b>gzip [Options] [filenames]</b> //basic structure</pre>
   * <pre><b>gzip a.txt</b> //removes the original file and creates a.txt.gz</pre>
   * <pre><b>gunzip a.txt.gz</b> //decompress the file</pre>
   * <pre><b>gzip -d a.txt.gz</b> //decompress the file</pre>
   * <pre><b>gzip -f a.txt</b> //force compression</pre>
   * <pre><b>gzip -k a.txt</b> //compress without deleting original file</pre>
   * <pre><b>gzip -L</b> //displays gzip license</pre>
   * <pre><b>gzip -L [foldername]</b> //recursively compress all the files and subfolders</pre>
   * <pre><b>gzip -[1-9] a.txt</b> //controlling speed and level of compression</pre>
   * <pre><b>gzip -1 a.txt</b> //maximum compression at the slowest speed</pre>
   * <pre><b>gzip -9 a.txt</b> //minimum compression at the fastest speed</pre>
   * <pre><b>gzip -v a.txt</b> //displays reduction % for each file compressed</pre>

2. **touch**

```Text
touch [filename] //creates an empty file
```

3. **chmod** & **chown**
```Text
The chmod command stands for "change mode", and allows changing permissions of files and folders, also known as "modes" in UNIX. The chown command stands for "change owner", and allows changing the owner of a given file or folder, which can be a user and a group. That's the difference between them in a nutshell.

Let's say you are the owner of a file named myfile, and you want to set its permissions so that:

1. the user can read, write, and execute it
2. members of your group can read and execute it and
3. others may only read it.

This command will do the trick: 
Alphanumeric -> chmod u=rwx,g=rx,o=r myfile
Octal -> chmod 754 myfile

for examples on chown hypothetical scenarios - https://www.computerhope.com/unix/uchown.htm 
```