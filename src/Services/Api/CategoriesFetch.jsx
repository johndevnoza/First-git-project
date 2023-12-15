import {
  BASE_URL,
  ALL_CATEGORIES,
  IN_CATEGORY,
} from "../../Utils/constants.js";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { create } from "zustand";

export function useSingleCategory() {
  const { id } = useParams();
  const [singleCategory, setSingleCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${IN_CATEGORY}/${id}`)
      .then((response) => {
        setIsLoading(false);
        console.log(response.data);
        setSingleCategory(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, [id]);

  return { singleCategory, isLoading };
}

export const useCategories = create((set) => ({
  allCategories: [],
  loading: false,
  hasErrors: false,
  allCategoriesFetch: () => {
    set(() => ({ loading: true }));
    axios
      .get(`${BASE_URL}${ALL_CATEGORIES}`)
      .then((response) => {
        console.log(response.data);
        set(() => ({
          categories: response.data,
          loading: false,
        }));
      })
      .catch(() => {
        set(() => ({ hasErrors: true, loading: false }));
      });
  },
}));
