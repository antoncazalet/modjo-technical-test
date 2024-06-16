import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { typeDefs } from 'graphql-scalars';
import { CallsModule } from './calls/calls.module';
import { SummariesModule } from './summaries/summaries.module';
import { TranscriptsModule } from './transcripts/transcripts.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.gql'],
            installSubscriptionHandlers: false,
            playground: false,
            typeDefs: [...typeDefs],
            plugins: [
                ...(process.env.NODE_ENV === 'staging'
                    ? [ApolloServerPluginLandingPageLocalDefault()]
                    : []),
                ...(process.env.NODE_ENV === 'test'
                    ? [ApolloServerPluginInlineTraceDisabled()]
                    : []),
            ],
        }),
        CallsModule,
        TranscriptsModule,
        SummariesModule,
    ],
})
export class AppModule {}
