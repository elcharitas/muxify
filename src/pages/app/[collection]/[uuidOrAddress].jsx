import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import AppLayout from "src/layouts/app";
import { buildI18n } from "src/utils/i18n";
import { Box, Stack } from "@mui/material";
import { Search } from "src/components";
import { RootStyle } from "src/components/styles";
import { ItemBoardSmall, ItemHeader } from "src/components/widgets";
import { usePlaylist } from "src/hooks";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await buildI18n(locale, ["playlist"])),
    },
});

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

const CollectionListing = () => {
    const { address } = useAccount();
    const { query } = useRouter();
    const { read } = usePlaylist();
    const [collection] = read(query.uuidOrAddress, query.collection);
    return (
        <AppLayout title={collection.title}>
            <RootStyle>
                <ItemHeader
                    collection={collection}
                    isOwner={collection.address === address}
                />
                <Box sx={{ paddingTop: 14 }}>
                    <Stack justifyContent="end" direction="row">
                        <Search sx={{ mb: 3, width: 400 }} />
                    </Stack>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <ItemBoardSmall key={item} />
                    ))}
                </Box>
            </RootStyle>
        </AppLayout>
    );
};

export default CollectionListing;
