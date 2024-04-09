document.getElementById('title').innerHTML = "experto en galletas de mantequilla"

async function GetCart()
{
  try
  {
    const res = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    const data = await res.json()
    if(data == 0)
    {
      location.href = '/'
    }

    // Icon para eliminar producto
    const resDelete = await fetch(getUrl() + 'shared/templates/icons/delete.html')
    const iconDelete = await resDelete.text()

    let plantilla = ''
    data.forEach(item => 
    {
      plantilla += `
        <tr>
          <td style="text-align: center;">
            <img src="./img/products/small/${item.img}" class="img-small">
          </td>
          <td style="font-size: 1.2rem;">
            ${item.producto}
          </td>
          <td style="text-align: center;">
            ${item.cantidad}
          </td>
          <td style="text-align: center;">
            $${new Intl.NumberFormat("de-DE").format(item.precio)}
          </td>
          <td style="text-align: center;">
            <button class="text-danger btn-sm js-delet" data-item="${item.id}" style="border: none;"> 
              ${iconDelete}
            </button>
          </td>
        </tr>
      `
    })
    document.querySelector('#carrito').innerHTML = plantilla
  }
  catch(err)
  {
    console.log(err)
  }
}