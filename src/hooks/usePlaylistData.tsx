import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { PlaylistData } from "../Interface/PlaylistData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PlaylistData[]> => {
    const response = axios.get(API_URL + '/playlist');
    return response;
}

export function usePlaylistData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['playlist-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}