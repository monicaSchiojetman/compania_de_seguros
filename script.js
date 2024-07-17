 document.getElementById('tipo-seguro').addEventListener('change', function () {
   const valorSeguro = document.getElementById('tipo-seguro').value;
   let valorText = '';
   if (valorSeguro === 'Basico') {
     valorText = 'Valor: $500';
   } else if (valorSeguro === 'Intermedio') {
     valorText = 'Valor: $1000';
   } else if (valorSeguro === 'Premium') {
     valorText = 'Valor: $1500';
   }
   document.getElementById('valor-seguro').textContent = valorText;
 });
