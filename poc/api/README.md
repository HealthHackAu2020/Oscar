# oscar-api (POC)

## Dependencies

- Npm
- Node
- Docker
- AWS SAM

## Building

```
npm install
npm run build
```

## Running locally

```
sam local start-api
```

### Testing individual API

Record my daily mood

```
sam local invoke --region ap-southeast-2 RecordMyDailyMood -e mocks/create-event.json
```

List my daily moods

```
sam local invoke --region ap-southeast-2 DisplayMyPastMoods -e mocks/list-event.json
```

## Deploying to cloud

```
sam deploy --guided
```
