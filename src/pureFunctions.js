// Not pure
{
  const signInUser = (user) => (user.isSignedIn = true);
  const foo = {
    name: 'Foo',
    isSignedIn: false,
  };
  // Foo was mutated
  console.log(
    signInUser(foo), // true
    foo, // { name: "Foo", isSignedIn: true }
  );
}
// Pure
{
  const signInUser = (user) => ({ ...user, isSignedIn: true });
  const foo = {
    name: 'Foo',
    isSignedIn: false,
  };
  // Foo was not mutated
  console.log(
    signInUser(foo), // { name: "Foo", isSignedIn: true }
    foo, // { name: "Foo", isSignedIn: false }
  );
}
