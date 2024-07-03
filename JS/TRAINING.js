const list = [
    {fName : "ali",
    list2 : [ 2, 3 ,5 ],
    age : 23},
    {fName : "Amir",
    age : 23},
    {fName : "Pourya",
    age : 30},
    {fName : "Aryan",
    age : 23},
];
for ( i = 0 ; i <list.length ; i++ ){
        let names = list[i].fName;
        console.log(names);
        if(list[i].list2){
            for ( j = 0 ; j<list.list2 ;j++ ){
                let indexes =list.list2[j];
                console.log(indexes);
            }
        }
    }
// & ____________________________________________________________________________________

