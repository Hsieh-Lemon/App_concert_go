import { useQuery } from "@tanstack/react-query";
import { getConcerts } from "../api/firebase.js";
import { getLights } from "../api/firebase.js";
import { getPhones } from "../api/firebase.js";

export const useConcert = () => {
    return useQuery({
        queryKey: ['concerts'],
        queryFn: getConcerts,
    });
};
export const useLights = () => {
    return useQuery({
        queryKey: ['lights'],
        queryFn: getLights,
        
    });
};
export const usePhones = () => {
    return useQuery({
        queryKey: ['phones'],
        queryFn: getPhones,
        
    });
};