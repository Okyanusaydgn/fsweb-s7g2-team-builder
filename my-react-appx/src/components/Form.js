import React, { useEffect } from "react";
import { useState } from "react";
const initalData = {
  isim: "",
  eposta: "",
  role: "",
};
const Form = (props) => {
  const {oldMember, addMember, editMember} = props;
  //const { addMember } = props; // üyeleri almak için böyle bir fonksiyon oluşturduk.
  const [formData, setFormData] = useState(initalData); // form elemanlarını tutmak için bir useState yapısı oluşturduk.
  const [editMode, setEditMode] = useState(false); // burada useState kısmında bış bir array [] koymadık çünkü değerlerimizi tutan boş bir obje oluşturmak istedik bu yüzden "initalData" adlı bir yapı oluşturduk.

  useEffect(() => {
    if (oldMember) {
      setEditMode(true);
      setFormData(oldMember);
    } else {
      setEditMode(false);
    }
  }, [oldMember]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      editMember(formData);
    } else {
      addMember(formData);
    }
    setFormData(initalData);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim:
        <input
          type="text"
          name="isim"
          value={formData.isim}
          onChange={handleChange}
        />
      </label>
      <label>
        Eposta:
        <input
          type="text"
          name="eposta"
          value={formData.eposta}
          onChange={handleChange}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </label>
      <button>Gönder</button>
    </form>
  );
};

export default Form;

//label içindeki Name: <input name="name" yapmamızın sebebi initialData ile label input içindeki name in eşleşmesi için yazıldı. />
// label içinde input kısmında name de değişiklik olursa isim de değişiklik olacak, emailde değişiklik olursa bu sefer eposta da değişklik yapılacak.
// input a genellikle bir type yapısı belirlenir çünkü birden fazla type yapısı vardır.
// formu sıfırlamak için value değeri vermemiz lazım şöyle düşün bir kullanıcı formu doldurur ama bizim başka bir kullanıcı için hazız hale getirmemiz lazım bu yüzden formu sıfırlamak için bir value değeri oluşturuyoruz.
//const {name, value, type} = event.target buradaki bu yapı "event.target" bize vent yapısı geldiği zaman .target ile hangi elemandan bu event in geldiğini gösterir.
/* setformData({...formData}) React da state değişkenleri doğrudan değiştirilmemelidir. bunun yerine mevcut state i kopyalayıp React bileşenlerin yeniden render edilmesi 
daha iyi bir yoldur. 
"..." bu yapıya spread operator denir. Bu operatör nesnenin veya dizi elemanının başka bir nesne veya dizi içine kopyalanmasını veya birleştirmemizi
sağlar.Aynı zamanda, bu özellik React'ta state güncellemeleri gibi durumlarda kullanışlıdır. 
Çünkü mevcut veriyi değiştirmeden, değişiklikleri yansıtan yeni bir kopya oluşturmanızı sağlar 
ve bu React'in bileşenlerin nasıl güncellenmesi gerektiğini daha doğru bir şekilde anlamasına yardımcı olur.*/
//setformData({...formData, [name]:value}) buradaki "[name]:value" ile yapıyı dinamikleştirdik. biz burada initialData yı güncelleştirmek için kullandırk.
//isim : "", isim=name yapısı ve "" = value yapısı biz bunları güncellemek için [name]:value yapısını kullandık.
