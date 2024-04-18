import axios from "axios";
import { useState, useEffect } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials";

  //? GET DATA
  const getTutorial = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  //? Sayfa ilk acildiginda veriyi cekiyoruz
  useEffect(() => {
    getTutorial();
  }, []);

  //? VERI EKLEME ADD
  const addTutorial = async (newData) => {
    try {
      await axios.post(url, newData);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
  //? VERI SILME DELETE
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
  //? UPDATE PUT
  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));
    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorial();
  };
  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </div>
  );
};
export default Home;
