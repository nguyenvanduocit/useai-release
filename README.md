# pluginvue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```

# UseAI Plugin

## Socket.IO Connection Management

### Overview

The plugin uses a centralized, event-driven architecture for managing Socket.IO connections. This ensures clean separation of concerns and maintainability.

### Architecture

```
┌─────────────────┐    Events    ┌─────────────────┐    Socket.IO    ┌─────────────────┐
│   Settings UI   │ ◄──────────► │   Main Plugin   │ ◄─────────────► │   AI Server     │
│                 │              │                 │                 │                 │
│ • Connect       │              │ • Connection    │                 │ • Real-time     │
│ • Disconnect    │              │   Management    │                 │   Communication │
│ • Status        │              │ • Event Hub     │                 │ • AI Processing │
│   Display       │              │ • State Sync    │                 │                 │
└─────────────────┘              └─────────────────┘                 └─────────────────┘
```

### Event System

#### Connection Control Events (Settings → Main)
- `socket:connect-request` - Request connection to server
- `socket:disconnect-request` - Request disconnection from server  
- `socket:reconnect-request` - Request reconnection to server

#### Connection Status Events (Main → Settings)
- `socket:status-changed` - General status update with full info
- `socket:connected` - Successfully connected
- `socket:disconnected` - Disconnected from server
- `socket:connecting` - Attempting to connect
- `socket:error` - Connection error occurred
- `socket:reconnecting` - Attempting to reconnect

### Connection States

1. **Disconnected** - No active connection
2. **Connecting** - Establishing initial connection
3. **Connected** - Successfully connected and ready
4. **Reconnecting** - Attempting to restore lost connection
5. **Error** - Connection failed or error occurred

### Usage Examples

#### Settings Component
```typescript
// Request connection
plugin.events.trigger('socket:connect-request', socketAddress)

// Listen for status updates
plugin.events.on('socket:status-changed', (info: SocketConnectionInfo) => {
  connectionStatus.value = info.status
  connectionError.value = info.error || ''
})
```

#### Main Plugin
```typescript
// Handle connection requests
this.events.on('socket:connect-request', (address: string) => {
  this.connectSocket(address)
})

// Emit status updates
this.events.trigger('socket:status-changed', {
  status: 'connected',
  address: socketAddress,
  timestamp: new Date()
})
```

### Benefits

1. **Centralized Logic** - All socket management in main.ts
2. **Reactive UI** - Settings automatically reflect connection state
3. **Clean Separation** - UI and connection logic are decoupled
4. **Event-Driven** - Loose coupling through events
5. **Maintainable** - Easy to extend and modify
6. **Type Safe** - Full TypeScript support with proper interfaces
