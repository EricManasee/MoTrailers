// import { runInAction, extendObservable, action } from "mobx";

// export default extendObservable(this, {
//     credits: [],
//     loading: false,
//     loadPeople: action(async () => {
//         this.loading = true;
//         // fetch data from api and update people
//         console.log('credits.cast ', credits.cast);
//         const base = `https://image.tmdb.org/t/p/w500/`;
//         const people = credits.cast.map((castItem) => {
//             // let imageURL = castItem.profile_path === null ? 'https://image.tmdb.org/t/p/w500/AhX2E9R1l4I8xgCwS1z3i6KoPX9.jpg' : `${base}${castItem.profile_path}`;
//             console.log(imageURL);
//             const response = await fetch("https://randomuser.me/api/?results=10");
//             const json = await response.json();
//             runInAction(() => {
//                 this.people = json.results;
//                 this.loading = false;
//             });
//         })
//     });


//     buildPeople(credits) {
//         if (credits && credits.cast) {
//             console.log('credits.cast ', credits.cast);
//             const base = `https://image.tmdb.org/t/p/w500/`;
//             const people = credits.cast.map((castItem) => {
//                 let imageURL = castItem.profile_path === null ? 'https://image.tmdb.org/t/p/w500/AhX2E9R1l4I8xgCwS1z3i6KoPX9.jpg' : `${base}${castItem.profile_path}`;
//                 // let imageURL = castItem.profile_path === null ? require('../../assets/images/PersonNoPic.png') : `${base}${castItem.profile_path}`;

//                 console.log(imageURL);
//                 return <Category
//                     key={`${castItem.name}_${castItem.order}`}
//                     imageUri={imageURL}
//                     // imageUri={require(`https://image.tmdb.org/t/p/w500/${profile_path}`)}
//                     name={castItem.name}
//                     style={{ color: 'white' }}
//                 />
//             });
//             return people;
//         }
//         return null;
//     }