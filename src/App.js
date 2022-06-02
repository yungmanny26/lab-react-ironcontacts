import logo from "./logo.svg";
import React from "react";
import "./App.css";
import celebContacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = React.useState(celebContacts.slice(0, 5));

  

  const addContact = () => {
    const random = celebContacts[Math.floor(Math.random() * celebContacts.length)];
    if (contacts.find((contact) => contact.id === random.id)) {
      if (contacts.length < celebContacts.length) {
        addContact();
      }
      return;
    }
    setContacts((contacts) => [random, ...contacts]);
  };

  const sortByName = () => {
    const sorted = [...contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    setContacts(sorted)
  };

  const sortByPopularity = () => {
    const sorted = contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    setContacts(sorted)
  };
  const removeContact=(contactToRemove)=>{
    return contactToRemove !== contact
  }

  return (
    <div className="App">
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table className="table-header">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {/* {insert contact map here} {
return ( */}
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  {" "}
                  <img src={contact.pictureUrl} height="60" width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
