# Clarify — remove legacy HTML Select helper

- No product decision is unresolved: the helper is not exported, has no repository consumers, and the project guide makes Vue 3 the only supported interactive implementation.
- Decision: delete the dead helper and its styles instead of creating a second framework-neutral Select runtime.
- No public export or user-visible Vue behavior is changed.

