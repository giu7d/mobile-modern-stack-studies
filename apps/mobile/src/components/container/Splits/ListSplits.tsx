import { Dimensions, View } from 'react-native'

import { FlashList } from '@shopify/flash-list'
import { Bill } from 'splitter-api/src/entities/bill'

import Avatar from '@/components/fragments/Avatar'
import Badge from '@/components/fragments/Badge'
import MiniBanner from '@/components/fragments/MiniBanner'
import Text from '@/components/fragments/Text'
import { trpc } from '@/services/api'
import { SPLIT_STATUS } from '@/services/constants'

type Props = {
  onOpenSplit?: (data: Bill) => void
}

export default function ListSplits({ onOpenSplit = () => {} }: Props) {
  const bills = trpc.bills.list.useQuery()
  const width = Dimensions.get('screen').width

  if (!bills.data) return <></>

  if (!bills.data.length) return <></>

  return (
    <FlashList
      horizontal
      data={bills.data}
      estimatedItemSize={25}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <View className="w-4" />}
      renderItem={({ item }) => (
        <View style={{ width: width - 48 }}>
          <MiniBanner.Root onPress={() => onOpenSplit(item)}>
            <MiniBanner.Content>
              <View className="flex-row gap-4">
                <Avatar.Icon className="bg-[#F3D2D2]">{item.icon}</Avatar.Icon>
                <View>
                  <Text.Title>{item.name}</Text.Title>
                  <Avatar.SmallProfileGroup />
                </View>
              </View>
              <View>
                <Text.Subtitle>Remaining</Text.Subtitle>
                <Text.Price>{item.totalValue}</Text.Price>
              </View>
            </MiniBanner.Content>
            <MiniBanner.Footer>
              <Badge.SplitStatus
                statusClassName={SPLIT_STATUS[item.status].statusClassName}
              >
                {SPLIT_STATUS[item.status].statusContent}
              </Badge.SplitStatus>
            </MiniBanner.Footer>
          </MiniBanner.Root>
        </View>
      )}
    />
  )
}
