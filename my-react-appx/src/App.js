import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [teamList, setTeamList] = useState([]);
  //const [editMode, setEditMode] = useState(false); // boş olmasını istediğimiz için "false" yazdık. !!! Bunu kullanmayacağız.
  const [oldMember, setOldMember] = useState(null); // burada boş olmasını istediğimiz için "null" yazdık.
  const addMember = (newMember) => {
    newMember.id = new Date(); // burada id oluşturmak için new Date() adlı bir yapı oluşturduk.
    setTeamList([...teamList, newMember]); // teamList i kopyaladık içine newMember ı ekledik.
  };
  const editMember = (formData) =>{
    const updatedTeamList = teamList.map((item)=>{
      if(item.id === oldMember.id){
          formData.id = oldMember.id
          return formData; 
      }else {
        return item;
      }
    })
    setTeamList(updatedTeamList);
    setOldMember(null);
  }
  const handleEditClick = (member) => {
    setOldMember(member);
  }

  return (
    <div className="App">
      <div className="container">
        <h2>Team List</h2> 
        <div className="teamList">
          {teamList.map((member) => (
            <div key={member.id} className="teamlist-row">
              {member.isim} 
              <button onClick={()=> handleEditClick(member) }>
                Düzenle 
              </button>
            </div>
          ))}
        </div>
      </div>
      <Form addMember={addMember}  oldMember={oldMember} editMember ={editMember}/>
    </div>
  );
}

export default App;

//<Form addMember ={addMember}/> {addMember} bu kısma farklı bir isim de koyabilirsin member gibi..
