function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

function CustomImage() { // Renomeado para evitar conflito com 'Image' HTML element
  return (
    <img
      className="image" // Classes de CSS devem ser definidas em um arquivo CSS, não inline
      style={{ width: '100px', height: '100px', aling: 'center', left: '100px' }} // Estilos inline são definidos com um objeto JavaScript
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Use um URL de imagem direto
      alt="Uma pessoa olhando para uma parede" // Adicione um texto alternativo para acessibilidade
    />
  );
}


export default function PackingList() {
  return (
    <section>
      <h1>Lista de embalagem de Sally Ride</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Traje especial" 
        />
        <Item 
          isPacked={true} 
          name="Capacete com folha dourada" 
        />
        <Item 
          isPacked={false} 
          name="Foto de Tam" 
        />
        <CustomImage />
      </ul>
    </section>
  );
}
