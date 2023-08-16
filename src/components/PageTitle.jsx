import { useState, useEffect } from "react";

export default function PageTitle({ selectedFeedTopic }) {
    const [pageTitle, setPageTitle] = useState("")

    useEffect(() =>{
        function formatText(text) {
            // Split the input by hyphens
            const words = text.split("-");
          
            // Capitalize each word and join them with spaces
            const formattedWords = words.map(word => {
              if (word.length === 1) {
                return word.toUpperCase(); // If the word has a single letter, capitalize it
              } else {
                return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
              }
            });
          
             setPageTitle(formattedWords.join(" "));
          }
    
          formatText(selectedFeedTopic)

    }, [selectedFeedTopic])

    return (
      <>
        <div className="bg-white rounded-lg text-left pt-4 pl-4 pb-1">
            <h1 className="font-bold mb-7 text-2xl">{pageTitle}</h1>
        </div>
      </>
    );
  }
  