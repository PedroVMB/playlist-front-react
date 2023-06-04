import { useEffect, useState } from "react";
import "./modal.css";
import { usePlaylistDataMutate } from "../../hooks/usePlaylistDataMutate";
import { PlaylistData } from "../../Interface/PlaylistData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void,
}

interface ModalProps {
    closeModal(): void,
}

const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}/>
        </>
    )
}

export function Modal({ closeModal}: ModalProps ) {
    const [name, setName] = useState('');
    const [banda, setBanda] = useState('');
    const [url, setUrl] = useState('');
    const [genero, setGenero] = useState('');
    const {mutate, isSuccess, isLoading} = usePlaylistDataMutate();

    const submit = () => {
        const playlistData: PlaylistData = {
            name,
            banda,
            url,
            genero
        }
        mutate(playlistData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova musica em sua playlist favorita</h2>
                <form className="input-container">
                    <Input label='Nome' value={name} updateValue={setName}/>
                    <Input label='Banda' value={banda} updateValue={setBanda}/>
                    <Input label='url' value={url} updateValue={setUrl}/>
                    <Input label='Genero' value={genero} updateValue={setGenero}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )

}
