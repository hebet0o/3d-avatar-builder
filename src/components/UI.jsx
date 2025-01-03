import {useConfiguratorStore} from "../store.js";
import { useEffect } from "react";

const AssetsBox = () => {
    const{ categories, currentCategory, fetchCategories, setCurrentCategory} = 
        useConfiguratorStore();

        useEffect(() => {
            fetchCategories();
        }, [fetchCategories]);

    if (!categories || categories.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="rounded-full border-purple-700 border-solid border-2 drop-shadow-md p-6 gap-6 flex flex-col">
            <div className="flex items-center gap-6 pointer-events-auto">
                {categories.map((category) => (
                  <button
                  key={category.id}
                  onClick={() => setCurrentCategory(category)}
                  className={`transition-colors duration-200 font-medium ${
                      currentCategory.name === category.name 
                          ? "text-purple-700" 
                          : "text-gray-500 hover:text-purple-500"
                  }`}
              >
                  {category.name}
              </button>  
          ))}
            </div>
            <div className="flex gap-2 flex-wrap">
                 {currentCategory && currentCategory.assets && currentCategory.assets.map((asset, index) => (
                    <button key={index}
                     className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 pointer-events-auto hover:opacity-100 transition-all border-2 duration-500">
                        <img src={pb.files.getUrl()} 
                        alt={asset.name} 
                        className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

const DownloadButton = () => {
    return(
        <button className="btn">
            Use this Avatar!
        </button>
    );
}

export const UI = () => {
    return (
        <main className="pointer-events-none fixed z-10 inset-0 p-10">
            <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <DownloadButton />
                </div>               
                <div className="flex flex-col gap-6">
                    <AssetsBox />
                </div>
            </div>
        </main>
    )
}