// Aslında component "functiondan" başka bir şey değil yani bir fonksiyon tek farkı jsx yapısı dönmesidir !!!

import { useEffect, useState } from "react";

const Form = ({ addMember, updateMember, memberToUpdate }) => {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    role: "",
  });


  const inputChangeHandler = (e) => {
    const{name, value} = e.target;
    setMemberData({ ...memberData, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (memberData.id) {
      updateMember(memberData);
    } else {
      addMember({ ...memberData, id: Math.round(Math.random() * 9999999) });
    }

    setMemberData({ name: "", email: "", role: "" });
  };

  useEffect(() => {
    if (memberToUpdate) {
      setMemberData(memberToUpdate);
    }
  }, [memberToUpdate]);

  return (
    <form onSubmit={submitHandler} className="member-form">
        <h2>
            {memberData.id ? `${memberData.name} Kaydını Güncelle.`: "Yeni Kayıt Formu"}
        </h2>
        <hr style={{marginBottom:"1.5rem"}}/>
      <div>
        <label>
          <span>Üye adı:</span>
          {/*Controlled component : İnput değerimize value yazıp state değerini bağlarsan bu input un value su react state ı tarafından kontrol edilir. Buna biz controlled component diyoruz.  */}
          {/*Uncontrolled component: 30. satırdaki value değerinin olmamasıdır.Yani buradaki input yapısının react tarafından kontrol edilmemesidir.  */}
          <input
            type="text"
            name="name"
            // inputtaki değişiklik state e yazdırılır.
            onChange={inputChangeHandler}
            // state deki değişiklik input a yazdırılır.
            value={memberData.name}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Üye email:</span>
          <input
            type="email"
            name="email"
            onChange={inputChangeHandler}
            value={memberData.email}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Üye rolü:</span>
          <input
            type="text"
            name="role"
            onChange={inputChangeHandler}
            value={memberData.role}
          />
        </label>
      </div>
      <div className="submit-btn-container">
        <button type="submit" disabled={ !(memberData.name && memberData.email)}>
          {memberData.id ? "Güncelle" : "Yeni Kayıt Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default Form;
