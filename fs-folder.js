//Working with fs module to play with directories

const fs = require('fs');

// 1 : Creating a directory
// fs.mkdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else console.log('Folder Created Successfully')
// });

// 2 : Removing a directory
// fs.rmdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else console.log('Successfully deleted folder');
// })

// 3 : Creating a folder and creating a file inside that folder
// fs.mkdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else{
//         fs.writeFile('./tutorial/example.txt', '123', (err) => {
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('successfully created file');
//             }
//         })
//     }
// });

// 4 : Deleting a folder with a file inside it
// fs.unlink('./tutorial/example.txt', (err) => {
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('tutorial', (err) => {
//             if(err)
//                 console.log(err);
//             else console.log('Folder has been successfully deleted');
//         })
//     }
// })

// 5 : Deleting multiple files in other directory
// fs.readdir('example', (err, files)=> {
//     if(err)
//         console.log(err);
//     else{
//         for(let file of files){
//             fs.unlink('./example/' + file, (err)=>{
//                 if(err)
//                     console.log(err);
//                 else console.log('successfully deleted file');
//             });
//         }
//     }
// } );
