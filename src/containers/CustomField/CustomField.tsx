import React, { useEffect, useState } from 'react';
import { TextInput, FieldLabel, Select } from '@contentstack/venus-components';

import ContentstackAppSdk from "@contentstack/app-sdk";
import './customField.css'

interface GrandParentOption {
  label: string;
  value: string;
}

interface ParentOption {
  label: string;
  value: string;
}
interface TypeSDKData {
  config: any;
  location: any;
  appSdkInitialized: boolean;
}

const CustomFieldExtension: React.FC = () => {
  const [state, setState] = useState<TypeSDKData>({
    config: {},
    location: {},
    appSdkInitialized: false,
  });

  const [urlPath, setUrlPath] = useState("");
  const [grandParent, setGrandParent] = useState<GrandParentOption | null>(null);
  const [parent, setParent] = useState<ParentOption | null>(null);
  const [urlPathDisabled, setUrlPathDisabled] = useState(true);

  useEffect(() => {
    ContentstackAppSdk.init().then(async (appSdk: any) => {
      appSdk?.location?.CustomField?.entry?.onChange(() => {
        handleUrl(appSdk)
      })
      handleUrl(appSdk)

      appSdk?.location?.CustomField?.frame?.updateHeight(500)
    });
  }, [grandParent, parent]);


  const handleUrl = (appSdk: any) => {
    let path;
    let gp = grandParent ? `/${grandParent.value}` : ''
    let p = parent ? `/${parent.value}` : ''
    if(appSdk?.location?.CustomField?.entry?._changedData?.title){
      path = `${gp}${p}/${appSdk?.location?.CustomField?.entry?._changedData?.title.split(' ').join('-').toLowerCase()}`;
    }else{
      path = `${gp}${p}`;
    }
    setUrlPath(path);
  }

  const grandParentOptions: GrandParentOption[] = [
    {
      label: 'Mens',
      value: 'mens',
    },
    {
      label: 'Womens',
      value: 'women',
    },
    {
      label: 'Kids',
      value: 'kids',
    },
  ];

  const parentOptions: ParentOption[] = [
    {
      label: 'Top wear',
      value: 'top-wear',
    },
    {
      label: 'Bottom wear',
      value: 'bottom-wear',
    },
    {
      label: 'Winter wear',
      value: 'winter-wear',
    },
    {
      label: 'Summer wear',
      value: 'summer-wear',
    },
  ];

  return (
    <div>
      <FieldLabel htmlFor="someInput" >
        Grand Parent
      </FieldLabel>
      <Select
        value={grandParent}
        isMulti={false}
        onChange={(option: any) => setGrandParent(option as GrandParentOption)}
        options={grandParentOptions}
        placeholder="Select Grand Parent"
        isSearchable={true}
        isClearable={true}
        width="300px"
      />
      <FieldLabel htmlFor="someInput" >
        Parent
      </FieldLabel>
      <Select
        value={parent}
        isMulti={false}
        onChange={(option: any) => setParent(option as ParentOption)}
        options={parentOptions}
        placeholder="Select Items"
        isSearchable={true}
        isClearable={true}
        width="300px"
        multiDisplayLimit={2}
      />
      <FieldLabel htmlFor="someInput" >
        URL Path
      </FieldLabel>
      <TextInput
        type="text"
        disabled={urlPathDisabled}
        value={urlPath}
        onChange={setUrlPath}
        width="full"
        placeholder="URL..."
      />
    </div>
  );
};

export default CustomFieldExtension;
