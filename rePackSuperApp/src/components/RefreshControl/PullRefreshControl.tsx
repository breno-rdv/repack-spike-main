import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';

export interface RefreshProps {
  refreshing: boolean;
  refresh: any;
}

export const PullRefreshControl: React.FC<RefreshProps> = ({ refreshing, refresh, children }) => {
  return (
    <ScrollView
      testID={'pullRefreshControl'}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    >
      {children}
    </ScrollView>
  );
};
