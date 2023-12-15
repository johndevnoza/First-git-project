import {
  BASE_URL,
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
} from "../../Utils/constants.js";

import axios from "axios";
import { create } from "zustand";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useProductsFetch() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALL_PRODUCTS}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, []);

  return { product, isLoading };
}

export function useSingleProductFetch() {
  const { itemId } = useParams();
  const [single, setSingle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${SINGLE_PRODUCT}${itemId}`)
      .then((response) => {
        setIsLoading(false);
        setSingle(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(`error fetching`, error);
      });
  }, [itemId]);

  return { single, isLoading };
}

export const useProductsStore = create((set) => ({
  allProducts: [],
  singleProduct: null,
  loading: false,
  hasErrors: false,
  allProductsFetch: () => {
    set(() => ({ loading: true }));
    axios
      .get(`${BASE_URL}${ALL_PRODUCTS}`)
      .then((response) => {
        set(() => ({
          allProducts: response.data,
          loading: false,
        }));
      })
      .catch(() => {
        set(() => ({ hasErrors: true, loading: false }));
      });
  },
  singleProductsFetch: () => {
    const { itemId } = useParams();
    set(() => ({ loading: true }));
    axios
      .get(`${BASE_URL}${SINGLE_PRODUCT}${itemId}`)
      .then((response) => {
        console.log(response.data);
        set(() => ({
          singleProduct: response.data,
          loading: false,
        }));
      })
      .catch(() => {
        set(() => ({ hasErrors: true, loading: false }));
      });
  },
}));
