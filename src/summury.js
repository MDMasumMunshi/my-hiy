/*
* Components
* JSX
* Props
* State
* Event
* [Conditional Rendering]
*/ 

/*
1. APi
<Suspense> lets you display a fallback until its children have finished loading.
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
*/ 

fetch("url")
.then(res => res.json())
.then(data => console.log(data))

const loadData = async() => {
     const res = await fetch("url");
     const data = res.json();
     return data;
}