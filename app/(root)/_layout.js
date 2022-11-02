import { Layout } from "expo-router";

const RootLayout = () => {
  const auth = true; // useAuth((state) => state.isAuthenticated);

  return (
    <Layout>
      <Layout.Screen name="(app)" redirect={!auth} />
      <Layout.Screen name="(welcome)" redirect={auth} />
      <Layout.Children />
    </Layout>
  );
};

export default function Root() {
  return <RootLayout />;
}
