

//Question 1)
function generateFullPyramid (n) {
    for (let i = 0; i <=n ; i ++) {
        let space = " ".repeat(n - i);
        let stars = "* ".repeat(i);

        console.log(space + stars);
    }
}

generateFullPyramid(4);

//Question 2 
//Write a program to find the consecutive characters in a string. 
function findConsecutive (str) {
    let result = [];
    for (let i = 0; i< str.length; i++){
        if(str[i] === str[i-1]){
            result.push(str[i])
        }
    }

    return result;
}

findConsecutive("aabbcc")

// Question 3 
function removeDuplicates(arr){
    return [...new Set(arr)];
}

let sample = [1,2,3, 4, 4, 5];
console.log(removeDuplicates(sample))

// Question 4 
Select -Value as opposite from sample order by id desc;

//Question 5
Select category.CategoryId, product.price as MaxPrice from product on product.categoryId = category.categoryId where ...


// Question 6 
File handling - using library to allow user to upload file, after uploading file, check the validity of the file type, data to prevent duplicate data in the file.
Queue Processsing - after file uploaded store in temporary storage location like S3 bucket .., and add a queue id for that data
Background processing - use worker to read and process the file in background to handling each file and update the process status
Duplicate checking - using library to read the excel file, check is there duplicate data between the uploaded excel file with the DB. Can use database query to perform checking against the existing data with the uploaded better. 
After validate the data, can bulk inserting the data to the db for better performing.
Use asyn task queue to manage multiple user uploads and processing the file, can optimize db with indexes and partitioning to handle high volume insert and query efficiency.
Implement comprehensive error hangling to capture and record the log error 
Notice the user for the uploaded status (success, fail, pending so on)

