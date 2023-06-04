import axios, { AxiosPromise } from "axios";
import { PlaylistData } from "../Interface/PlaylistData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: PlaylistData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/playlist', data);
    return response;
};

export function usePlaylistDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['playlist-data']);
        }
    });

    return mutate;
}
