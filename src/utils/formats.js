import md5 from "md5";

export const getGravatarUrl = (cid) => {
    const hash = md5(cid);
    return `https://gravatar.com/avatar/${hash}.jpg?d=robohash&s=500`;
};

export const getIpfsUrl = (cid) => {
    return String(
        cid?.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
    );
};

export const getItemImage = (image) => {
    if (!image) return undefined;
    return getIpfsUrl(image);
};

export const compAddress = (addr1, addr2) => {
    return addr1?.toLowerCase() === addr2?.toLowerCase();
};
