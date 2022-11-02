import { useEffect } from "react";
import { uid } from "radash";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { useMediaQuery, Box, Drawer, Stack } from "@mui/material";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { usePlaylist } from "src/hooks";
import { Anchor, SvgIcon } from "src/components";
import { CONFIG } from "src/config";

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: CONFIG.UI.APP_SIDEBAR_WIDTH,
    },
}));

const Sidebar = ({ isOpenSidebar, onCloseSidebar }) => {
    const { pathname, push } = useRouter();
    const { openConnectModal } = useConnectModal();
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const { db: playlist } = usePlaylist();

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [isOpenSidebar, onCloseSidebar]);

    const renderContent = (
        <Box
            sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Stack direction="column" spacing={2} sx={{ px: 6, my: 4 }}>
                <Anchor href="/" sx={{ height: 64 }}>
                    <SvgIcon name="logo" size={200} />
                </Anchor>
            </Stack>

            <Stack direction="column" spacing={3} sx={{ px: 6 }}>
                <Anchor
                    icon={`home${pathname === "/app" ? "-selected" : ""}`}
                    href="/app"
                    label="Home"
                    sx={{
                        fontSize: "18px",
                        color:
                            pathname === "/app"
                                ? "tertiary.light"
                                : "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />

                <Anchor
                    icon={`add-square${
                        pathname === "/app/create" ? "-selected" : ""
                    }`}
                    label="Create Playlist"
                    sx={{
                        fontSize: "18px",
                        color:
                            pathname === "/app/create"
                                ? "tertiary.light"
                                : "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                    onClick={(e) => {
                        e?.preventDefault();
                        if (playlist) {
                            const newId = uid(32);
                            playlist.put({
                                id: newId,
                                title: "Playlist Name",
                                description:
                                    "such a great playlist to listen to",
                            });
                            push(`/app/playlists/${newId}`);
                        } else openConnectModal?.();
                    }}
                />

                <Anchor
                    icon="game"
                    href="/app/play"
                    label="Games"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />
            </Stack>

            <Stack direction="column" spacing={3} sx={{ px: 6, mt: 8 }}>
                <Anchor
                    icon="profile-circle"
                    href="/app/create"
                    label="Become a Creator"
                    sx={{
                        fontSize: "18px",
                        color: "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />

                <Anchor
                    icon={`collections${
                        pathname === "/app/playlists"
                        || pathname === "/app/podcasts"
                        || pathname === "/app/albums"
                        || pathname === "/app/artistes"
                            ? "-selected"
                            : ""
                    }`}
                    href="/app/playlists"
                    label="Collections"
                    sx={{
                        fontSize: "18px",
                        color:
                            pathname === "/app/playlists"
                            || pathname === "/app/podcasts"
                            || pathname === "/app/albums"
                            || pathname === "/app/artistes"
                                ? "tertiary.light"
                                : "tertiary.main",
                        "&:hover": {
                            color: "tertiary.light",
                        },
                    }}
                    labelProps={{
                        fontWeight: "bold",
                    }}
                />
            </Stack>
            <Box>{/* <Footer /> */}</Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: CONFIG.UI.APP_SIDEBAR_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: CONFIG.UI.APP_SIDEBAR_WIDTH,
                            bgcolor: "background.default",
                            borderRightStyle: "none",
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
};

export default Sidebar;
