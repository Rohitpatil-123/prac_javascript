function fun()
{
p=f.c.value

if(p=="+")
{
f.d.value=eval(f.a.value)+eval(f.b.value)
}
else if(p=="-")
{
f.d.value=eval(f.a.value)-eval(f.b.value)
}
else if(p=="x")
{
f.d.value=eval(f.a.value)*eval(f.b.value)
}
else if(p=="/")
{
f.d.value=eval(f.a.value)/eval(f.b.value)
}
else if(p=="")
{f.d.value=""}
}