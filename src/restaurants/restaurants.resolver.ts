import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurentService: RestaurantService) {}

  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurentService.getAll();
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args() createRestaurantDto: CreateRestaurantDto,
  ): CreateRestaurantDto {
    console.log(createRestaurantDto);
    return createRestaurantDto;
  }
}
