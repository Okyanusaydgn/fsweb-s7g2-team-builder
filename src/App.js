import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]); // üyeleri listeleyen bir map oluşturacağımız için; useState yapısının içine boş bir array ("[ ]") ekliyoruz.
  const [memberToUpdate, setMemberToUpdate] = useState();



  const addMember = (memberData) => {
    setMemberList([...memberList, memberData]);
  };

  const updateMember = (memberData) => {
    setMemberList(
      memberList.map((member) => {
        if (memberData.id == member.id) {
          return memberData;
        } else {
          return member;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="member-card header">
        <div>İsim:</div>
        <div>Email:</div>
        <div>Rol:</div>
        <div>Action:</div>
      </div>
      {memberList.map((member) => (
        <div className="member-card">
          <div>{member.name}</div>
          <div>{member.email}</div>
          <div>{member.role}</div>
          <div>
            <button onClick={() =>setMemberToUpdate(member) }> Düzenle </button>
          </div>
        </div>
      ))}
      <hr />
      <Form addMember={addMember}  updateMember={updateMember} memberToUpdate = {memberToUpdate}/>
    </div>
  );
}

export default App;
