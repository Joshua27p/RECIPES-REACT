import React from 'react'
//el hook useHistory nos sirve para hacer push a las paginas que queramos ir
import { useHistory } from 'react-router-dom';
import myRecipesAPI from '../../APIs/myrecipesAPI';
// el hook useHistory te bota un objeto que sirve para navegar en este caso para ir a la ruta de los ID
// recipe card al ser un cascaron recibe props para ser llenado con la infación que mandamos
const RecipeCard = (props) => {
  const history = useHistory();
  const user = localStorage.getItem('user');
  //al momento de obtener user este viene como un string y lo necesiamos en su forma normal, es por eso que utilizamos JSOM.parse()
  const userParse = JSON.parse(user)

  //creamos la funcion que ira en onClick para 1 guardar las recetas con el postRecipe al hacerle click y no nos redireccione //a recipe deetail
  const handleClick = async e => {
    // como el evento onClick padre se come al children  es necesario utilizar el evento e.stopPropagation para que no le afecte
    e.stopPropagation();
    const storeRecipes = await myRecipesAPI.postRecipe(userParse.userId, props.recipeId)
  }

  return (
    //onCLick tieen que ir con un callback function (es recomendable utilizar los temple string para hacer el llamdo de la propiedad)
    //push nos sirve para ir a una ruta especifica
    <div onClick={() => history.push(`/recipe-detail/${props.recipeId}`)}
      className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 m-2">
      <div>
        <img style={{ cursor: 'pointer' }} className="w-full md:w-full h-56 object-cover object-center" src={props.img} alt="avatar" />
        <div className="flex md:space-x-1 px-2 py-1.5 bg-gray-800">
          {/* Este solo tiene que aparecer cuando lo grabe en my recipes */}

          {user ? <div onClick={(e) => handleClick(e)}>
            <svg className="text-white h-6 w-6 fill-current hover:text-green-500" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512", cursor: "pointer" }}  >
              <g>
                <g>
                  <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
			c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z
			"/>
                </g>
              </g>
              <g>
                <g>
                  <path d="M355.148,234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83,8.884-19.83,19.83v79.318h-79.318
			c-10.966,0-19.83,8.884-19.83,19.83s8.864,19.83,19.83,19.83h79.318v79.318c0,10.946,8.864,19.83,19.83,19.83
			s19.83-8.884,19.83-19.83v-79.318h79.318c10.966,0,19.83-8.884,19.83-19.83S366.114,234.386,355.148,234.386z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg> </div>
            : null}

          <div className="flex ml-12">

            <h1 className="mx-3 text-white font-semibold text-lg"> {props.spendTime} mins </h1>
          </div>
        </div>
        <div className="py-4 px-6">
          <h1 className="text-2xl font-semibold  text-center text-gray-800">{props.title}</h1>

          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" height="471pt" viewBox="-37 0 471 471.7209" width="471pt" xmlns="http://www.w3.org/2000/svg"><path d="m104.007812 221.5c0 55.785156 45.222657 101.007812 101.007813 101.007812s101.007813-45.222656 101.007813-101.007812-45.222657-101.007812-101.007813-101.007812c-55.757813.0625-100.945313 45.25-101.007813 101.007812zm101.007813 6.382812c-16.761719.09375-30.964844-12.320312-33.109375-28.945312-2.144531-16.621094 8.441406-32.238281 24.679688-36.398438v-8.539062c0-3.867188 3.132812-7 7-7 3.867187 0 7 3.132812 7 7v8.113281c15.882812 2.6875 27.476562 16.496094 27.375 32.609375 0 3.820313-3.097657 6.917969-6.917969 6.917969-3.820313 0-6.917969-3.097656-6.917969-6.917969-.011719-10.574218-8.589844-19.136718-19.164062-19.125-10.574219.011719-19.136719 8.59375-19.121094 19.167969.011718 10.570313 8.59375 19.132813 19.167968 19.117187 17.144532.097657 31.382813 13.253907 32.832032 30.339844 1.449218 17.082032-10.371094 32.449219-27.253906 35.433594v8.34375c0 3.867188-3.132813 7-7 7-3.867188 0-7-3.132812-7-7v-8.773438c-14.628907-3.863281-24.851563-17.050781-24.949219-32.179687 0-3.910156 3.171875-7.082031 7.082031-7.082031s7.082031 3.171875 7.082031 7.082031c.023438 9.777344 7.390625 17.976563 17.109375 19.042969.359375-.058594.726563-.085938 1.09375-.089844.527344 0 1.050782.0625 1.566406.179688 10.5-.257813 18.832032-8.921876 18.679688-19.421876-.152344-10.503906-8.734375-18.921874-19.234375-18.875zm0 0" /><path d="m367.121094 370.667969c-.050782.027343-.105469.054687-.164063.082031l-64.980469 30.699219c.699219 3.597656 1.003907 7.257812.90625 10.921875-.101562 3.789062-3.203124 6.808594-6.992187 6.808594-.066406 0-.132813 0-.199219 0l-95.101562-2.617188c-3.867188-.105469-6.914063-3.324219-6.808594-7.191406.105469-3.867188 3.328125-6.914063 7.191406-6.808594l87.417969 2.40625c-2.898437-16.941406-17.34375-29.488281-34.523437-29.988281l-57.851563-1.589844c-11.425781-.328125-22.628906-3.222656-32.78125-8.46875l-5.886719-3.046875c-28.910156-15.0625-63.746094-13.101562-90.78125 5.113281l-2.316406 84.160157 9.941406-5.324219c9.878906-5.3125 21.4375-6.578125 32.234375-3.527344l98.179688 27.558594c18.921875 3.875 38.585937 1.679687 56.1875-6.28125l136.019531-87.984375c-7.761719-7.945313-19.78125-9.941406-29.691406-4.921875zm0 0" /><path d="m.359375 465.765625 3.449219-125.214844 49.445312 1.363281-3.449218 125.214844zm0 0" /><path d="m211.585938 83v-76c0-3.867188-3.132813-7-7-7-3.867188 0-7 3.132812-7 7v76c0 3.867188 3.132812 7 7 7 3.867187 0 7-3.132812 7-7zm0 0" /><path d="m271.585938 83v-36c0-3.867188-3.132813-7-7-7-3.867188 0-7 3.132812-7 7v36c0 3.867188 3.132812 7 7 7 3.867187 0 7-3.132812 7-7zm0 0" /><path d="m151.585938 83v-36c0-3.867188-3.132813-7-7-7-3.867188 0-7 3.132812-7 7v36c0 3.867188 3.132812 7 7 7 3.867187 0 7-3.132812 7-7zm0 0" />
            </svg>
            <h1 className="px-2 text-sm text-green-500 font-bold"> $ {props.cost}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>                </svg>
            <h1 className="px-2 text-sm">{props.region}</h1>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RecipeCard

