import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [hashtags, setHashtags] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractHashtags = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      // https://platform.openai.com/docs/api-reference/completions/create
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract Hashtags from this text. Make all the letters lower case and prefix each word with # and separate with space\n\n' + text + '',
        temperature: 0.5, // Controls the randomness of the text generation. Higher more random, more creative, but can lead to unexpected results. Lower will lead to more conservative and predictable results. Range between 0-1.
        max_tokens: 60, // Number of words getting back
        top_p: 1.0,
        frequency_penalty: 0.8, // Higher makes the responses less repetitive. Range between -2.0 - 2.0
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const json = await response.json();
      setHashtags(json.choices[0].text.trim());
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        extractHashtags,
        hashtags,
        loading,
        isOpen,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
