  import { Component, OnInit } from '@angular/core';
  import {MatTableModule} from '@angular/material/table';


// export class DataComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }






export interface PeriodicElement {
  id:number;
  name: string;
  description: string;
  // email: string;
  // userId: number;
}





export interface UserTypeData {
  id:number;

  description: string;
  
}




export interface CountryData {
  id:number;
  name: string;
  
  
}


export interface OwnerData {
  id:number;
  name: string;
  surname: string;
  email: string;
   userId: number;
}


export interface UserData {
  id:number;
  name: string;
  userEmail:string;
  password:string;
  userTypeID:number;



 
}






const User_DATA: UserData[] = [
  {id: 1, name: 'Hydrogen',userEmail:'hads',password:'ewtrrnvnfdgrrrry',userTypeID:9}, //, email: 'Hadd',userId: 1
  {id: 2, name: 'Helium',userEmail:'gfh',password:'ewtrrvnnnnrrrry',userTypeID:9//, email: 'Hedf',userId: 2
},
  {id: 3, name: 'Lithium' ,userEmail:'bvn',password:'vnnnn',userTypeID:9//, email: 'Lidsds',userId: 3
},
  {id: 4, name: 'Beryllium' ,userEmail:'nnv',password:'vnn',userTypeID:9//, email: 'Bessf',userId: 1
},
 
];






const UserType_DATA: UserTypeData[] = [
  {id: 1,  description:'Hzl'}, //, email: 'Hadd',userId: 1
  {id: 2,  description: 'Hdf' //, email: 'Hedf',userId: 2
},
  {id: 3,  description: 'Lff' //, email: 'Lidsds',userId: 3
},
  {id: 4,  description: 'Bsf'//, email: 'Bessf',userId: 1
},
 
];



const Country_DATA: CountryData[] = [
  {id: 1, name: 'Hydrogen', }, //, email: 'Hadd',userId: 1
  {id: 2, name: 'Helium' //, email: 'Hedf',userId: 2
},
  {id: 3, name: 'Lithium'//, email: 'Lidsds',userId: 3
},
  {id: 4, name: 'Beryllium'//, email: 'Bessf',userId: 1
},
 
];


const OWNER_DATA: OwnerData[] = [
  {id: 1, name: 'Hydrogen', surname:'Hzl', email: 'Hadd',userId: 1}, 
  {id: 2, name: 'Helium', surname: 'Hdf' , email: 'Hedf',userId: 2},

  {id: 3, name: 'Lithium', surname: 'Lff' , email: 'Lidsds',userId: 3},
  {id: 4, name: 'Beryllium', surname: 'Bsf', email: 'Bessf',userId: 1},
 
];


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', description:'Hzl'}, //, email: 'Hadd',userId: 1
  {id: 2, name: 'Helium', description: 'Hdf' //, email: 'Hedf',userId: 2
},
  {id: 3, name: 'Lithium', description: 'Lff' //, email: 'Lidsds',userId: 3
},
  {id: 4, name: 'Beryllium', description: 'Bsf'//, email: 'Bessf',userId: 1
},
 
];


@Component({
  selector: 'table-basic-example',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})



//   @Component({
//    selector: 'table-basic-example',
// styleUrls: ['data.component.sass'],
//   templateUrl: 'data.component.html',
//  })




export class DataComponent {
  displayedColumns: string[] = ['id', 'name', 'description' 
  ,'read','update','delete' ];
  dataSource = ELEMENT_DATA;


  displayedColumnsOwner: string[] = ['id', 'name', 'surname' , 'email', 'userId'   
  ,'read','update','delete' ];
  dataSourceOwner = OWNER_DATA;


  displayedColumnsUser: string[] = ['id', 'name', 'userEmail' , 'password', 'userTypeID'       //, email: 'Hadd',userId: 1
  ,'read','update','delete' ];
  dataSourceUser = User_DATA;
  
  displayedColumnsUserTYpe: string[] = ['id', 'description'
  ,'read','update','delete' ];
  dataSourceUserType =UserType_DATA;

  
  displayedColumnsCountry: string[] = ['id', 'name'
  ,'read','update','delete' ];
  dataSourceCountry = Country_DATA;





}







