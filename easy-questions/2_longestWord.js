export const longestWord =(sen)=>{



    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    arr.sort((a,b)=>{return b.length -a.length})

    return arr[0]

    //noktalam işaretlerini kaldır
    // Cümleyi boşluklardan bolüp kelimelerle bir array oluşturmak
    // kelimelerle oluşturduğumuz arrayi kelimelerin karakter sayılarına gre azalan bir şekilde sıralamak
    // En başta yani 0. indexte yer alan kelimeyi return etmek
}

/*

-Using the javascript language, have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in the string.


ıf there are two or more words that are same lenght,
 return the first word from the string with that length.

 Ignore punctuation and assume sen will not be empty

*/ 