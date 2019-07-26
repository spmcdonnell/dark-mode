import useLocalStorage from './useLocalStorage';

function useDarkMode(key, initialValue) {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };

    return [value, setValue, handleChanges];
}

export default useDarkMode;
