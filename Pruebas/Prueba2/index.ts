
type Tclan = 'TypeScript AM' | 'Node Nest AM' | 'Node Nest PM ' | 'C# .net PM' | 'Java + Springtboot'



interface Icoder{
    firstname : string;
    lastname: string;
    email : string;
    identification: string;
    clan : string;
    birthdayDate? : string;
    phoneNumber? : string
        
}

const coder: Icoder = {
    firstname : 'Juan',
    lastname: 'Bolivar',
    email : 'jebolivar33@gmail.com',
    identification: '1139424868',
    clan : "TypeScript AM",
    birthdayDate: '28/12/2005',
    phoneNumber: '3003671318'
        
    
}




