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

3. 