import { Box } from "@mui/material";
import { ConnectButton as RainbowConnect } from "@rainbow-me/rainbowkit";
import { Button } from "../Button";
import { SvgIcon } from "../SvgIcon";

export const ConnectButton = () => {
    return (
        <RainbowConnect.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                if (!mounted) return null;
                if (!account || chain?.unsupported) {
                    return (
                        <Button
                            onClick={
                                chain?.unsupported
                                    ? openChainModal
                                    : openConnectModal
                            }
                        >
                            {chain?.unsupported
                                ? "Wrong network"
                                : "Connect Wallet"}
                        </Button>
                    );
                }
                return (
                    <Button
                        color="tertiary"
                        sx={{ py: 0.5, pl: 0.5, fontSize: 15 }}
                        onClick={openAccountModal}
                    >
                        <Box
                            sx={{
                                p: 0.7,
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "background.default",
                                borderRadius: "50%",
                                mr: 1,
                            }}
                        >
                            <SvgIcon name="wallet-check" size="24px" />
                        </Box>
                        {account.displayName}
                    </Button>
                );
            }}
        </RainbowConnect.Custom>
    );
};
