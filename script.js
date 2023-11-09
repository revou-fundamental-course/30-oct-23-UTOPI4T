function calculateBMI() {
  const gender = document.getElementById("gender").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseFloat(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

  if (weight < 0 || age < 0 || height < 0) {
    alert("Jangan Input Bilangan Negatif!\nUlangi!");
    return; // Menghentikan perhitungan BMI jika ada input negatif.
  }

  const bmi = weight / (height * height);

  let interpretation = "";

  if (bmi < 18.5) {
    interpretation = "Kurus";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    interpretation = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    interpretation = "Berat badan lebih";
  } else {
    interpretation = "Obesitas";
  }

  const result = `BMI: ${bmi.toFixed(2)} (${interpretation})`;
  document.getElementById("result").textContent = result;
}

function resetFields() {
  // Reset semua input dan hasil perhitungan BMI
  document.getElementById("weight").value = "";
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("result").textContent = "";
}
// Nathan Rahmavanya Pradhana - wsense911@gmail.com