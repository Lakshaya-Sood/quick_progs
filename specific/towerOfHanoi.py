def TOH(n,src,dest,temp):
	if(n==1):
		disk = src.pop(0);
		dest.insert(0,disk);
		return ;
	TOH(n-1,src,temp,dest);
	disk = src.pop(0);
	dest.insert(0,disk);
	TOH(n-1,temp,dest,src);
	return ;
	
src =['a','b','c','d']
dest = []
temp = []
TOH(4,src,dest,temp);
print(src,dest,temp);
	
