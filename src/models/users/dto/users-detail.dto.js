export class UserDetailDTO {
  id;
  name;
  nickname;
  email;
  imageURL;
  campers;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.nickname = props.nickname;
    this.email = props.email;
    this.imageURL = props.imageURL;
    
    // Null 허용(임시 적용)
    if(props.campers == null) {
      this.campers = null;
    } else {
      this.campers = new CampersDTO(props.campers);      
    }
  }
}