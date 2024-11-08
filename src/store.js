import { create } from 'zustand'

import PocketBase from 'pocketbase';

const pocketBaseUrl = import.meta.env.VITE_POCKETBASE_URL;
if (!pocketBaseUrl) {
    throw new Error('VITE_POCKETBASE_URL not found');
}

const pb = new PocketBase(pocketBaseUrl);

export const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  fetchCategories: async () => {
    const categories = await pb.collection('CustomizationGroups').getFullList({
        sort: '+position',
    });
    const assets = await pb.collection('CustomizationAssets').getFullList({
        sort: '-created',
    });
    
    set({categories, currentCategory: categories[0], assets});
  },
  setCurrentCategory: (category) => set({currentCategory: category}),
}))