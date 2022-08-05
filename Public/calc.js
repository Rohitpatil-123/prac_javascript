function  check()
{
j=0
c=new Date()
dd=c.getDate()
mm=c.getMonth()+1
yy=c.getFullYear()
cd=f.d.value
cm=f.m.value
cy=f.y.value
if(dd<cd)
{
dd=dd+30
mm=mm-1
dd=dd-cd
}
else
{
dd=dd-cd
}
if(mm<cm)
{
mm=mm+12
yy=yy-1
mm=mm-cm
}
else
{
mm=mm-cm
}

yy=yy-cy

alert(yy+" : Year\n"+mm+" : Month\n " +dd+" : Days")

}