 function calculateBirthday() {
      let name = document.getElementById("name").value;
      let birthday = document.getElementById("birthday").value;
      let result = document.getElementById("result");

      if (name === "" || birthday === "") {
        result.innerHTML = "Please fill all fields";
        return;
      }

      let today = new Date();
      let birthDate = new Date(birthday);

      let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
      );

      if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }

      let diff = nextBirthday - today;

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((diff / (1000 * 60)) % 60);
      let seconds = Math.floor((diff / 1000) % 60);

      result.innerHTML = `
        Hello <b>${name}</b> 🎉 <br>
        Your next birthday is in: <br><br>
        <b>${days}</b> Days <br>
        <b>${hours}</b> Hours <br>
        <b>${minutes}</b> Minutes <br>
        <b>${seconds}</b> Seconds
      `;
    }